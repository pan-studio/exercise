export class StatusResponse {
    errCode: number;
    errDetail: string;
    errMsg: string;
}

export class HttpCustomResponse {
    data: any;
    result: StatusResponse;
}