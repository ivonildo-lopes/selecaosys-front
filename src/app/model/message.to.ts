
export class MessageTO {

    public messagem: string;

    public success: boolean;

    public conteudo: any;

    constructor(messagem: string, success: boolean, conteudo: any) {
        this.messagem = messagem;
        this.success = success;
        this.conteudo = conteudo;
    }

}
