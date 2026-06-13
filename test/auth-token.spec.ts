/**
 * @jest-environment jsdom
 */
import { MINI_APP_BRIDGE_MESSAGES } from "../src/constants/common.constant";
import { MiniAppBridgeService } from "../src/services/bridge.service";

describe("MiniAppBridgeService.getAuthToken", () => {
  let postMessageSpy: jest.SpyInstance;
  let lastPosted: any;

  beforeEach(() => {
    lastPosted = undefined;
    postMessageSpy = jest
      .spyOn(window.parent, "postMessage")
      .mockImplementation((msg: any) => {
        lastPosted = msg;
      });
    if (!(global as any).crypto?.randomUUID) {
      (global as any).crypto = { randomUUID: () => "fixed-uuid" };
    }
  });

  afterEach(() => postMessageSpy.mockRestore());

  it("posts an AUTH_TOKEN request and resolves with the token from the response", async () => {
    const service = new MiniAppBridgeService();
    const promise = service.getAuthToken();

    expect(lastPosted.type).toBe(MINI_APP_BRIDGE_MESSAGES.AUTH_TOKEN);
    const requestId = lastPosted.requestId;
    expect(typeof requestId).toBe("string");

    window.dispatchEvent(
      new MessageEvent("message", {
        data: {
          type: MINI_APP_BRIDGE_MESSAGES.AUTH_TOKEN_RESPONSE,
          requestId,
          success: true,
          token: "signed.jwt.token",
        },
      }),
    );

    await expect(promise).resolves.toBe("signed.jwt.token");
  });

  it("rejects when the response indicates failure", async () => {
    const service = new MiniAppBridgeService();
    const promise = service.getAuthToken();
    const requestId = lastPosted.requestId;

    window.dispatchEvent(
      new MessageEvent("message", {
        data: {
          type: MINI_APP_BRIDGE_MESSAGES.AUTH_TOKEN_RESPONSE,
          requestId,
          success: false,
          error: "no session",
        },
      }),
    );

    await expect(promise).rejects.toBe("no session");
  });
});
