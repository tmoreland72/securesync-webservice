declare const axios: any;
declare const Validator: any;
declare const PubSubAdapter: any;
declare const v: any;
declare type PublishMessageProps = {
    severity: string;
    tenant_ref: string;
    action: string;
    target_ref: string;
    request: Record<string, unknown> | string;
    response: Record<string, unknown> | string;
    success: boolean;
};
