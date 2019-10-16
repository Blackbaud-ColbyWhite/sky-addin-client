/**
 * Interface for the actual message data embedded in an AddinHostMessageEventData.
 * The populated fields will vary by the message type.
 */
export interface AddinHostMessage {

  /**
   * Identifier to correlate authentication token requests from the add-in client to the host.
   */
  authTokenRequestId?: number;

  /**
   * Authentication token for the current user.
   */
  authToken?: string;

  /**
   * Additional context of the host page, which will vary for different extension points.
   */
  context?: any;

  /**
   * The environment id of the host page.
   */
  envId?: string;

  /**
   * Identifier to correlate modal requests from the add-in client to the host.
   */
  modalRequestId?: number;

  /**
   * Generic field for passing information about the request, such as the explanation for a
   * auth-token-fail message or action message for closing a dialog.
   */
  reason?: string;

  /**
   * Identifier for the current add-in being handled by the client.
   */
  addinId?: string;

  /**
   * The origin URL of the host page.
   */
  origin?: string;
}
