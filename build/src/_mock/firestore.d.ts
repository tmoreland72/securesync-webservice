declare const short: any;
declare type GetDocsProps = {
    collection: string;
    where?: Array<Array<string | number>>;
    orderBy?: Array<Array<string | number>>;
    limit?: number;
};
declare type GetDocsResponse = Array<Record<string, unknown>>;
declare type GetDocProps = {
    collection: string;
    id: string | number;
};
declare type GetDocResponse = Record<string, unknown> | undefined;
declare type CreateDocProps = {
    collection: string;
    doc: Record<string, unknown>;
};
declare type CreateDocResponse = Record<string, unknown> | string | number | boolean;
declare type UpdateDocProps = {
    collection: string;
    id: string | number;
    updates: Record<string, unknown>;
};
declare type UpdateDocResponse = Record<string, unknown> | boolean;
declare type DeleteDocProps = {
    collection: string;
    id: string | number;
};
declare type DeleteDocResponse = boolean;
declare const users: {
    id: number;
    name: string;
}[];
