import { MINI_APP_BRIDGE_MESSAGES } from "../constants/common.constant";

export type MiniAppResource = {
  name: string;
  id?: string;
};

/************************************* Bridge Message Type *************************************/

export type MiniAppBridgeMessage<TAction> =
  | MiniAppBridgeMessageNavigate
  | MiniAppBridgeMessageOpenOnScreenResourceForm
  | MiniAppBridgeMessageApi<TAction>;

export type MiniAppBridgeMessageNavigate = {
  type: typeof MINI_APP_BRIDGE_MESSAGES.NAVIGATE;
  params: {
    target: string;
    id?: string;
    query?: string;
  };
};

export type MiniAppBridgeMessageOpenOnScreenResourceForm = {
  type: typeof MINI_APP_BRIDGE_MESSAGES.OPEN_ON_SCREEN_RESOURCE_FORM;
  params: {
    resource: MiniAppResource;
    data?: any;
  };
};

export type MiniAppBridgeMessageApi<TActions> = {
  type: typeof MINI_APP_BRIDGE_MESSAGES.API;
  requestId: string;
  params: {
    action: TActions;
    resource: MiniAppResource;
    query?: string;
    body?: string;
  };
};

export type MiniAppBridgeMessageApiResponse<TData> = {
  type: typeof MINI_APP_BRIDGE_MESSAGES.API_RESPONSE;
  requestId: string;
  success: boolean;
  data?: TData;
  error?: any;
};
