export class Item{
  constructor(
    public ref: string,
    public name: string,
    public imgUrls: Array<string>,
    public categorie?: Array<string>,
    public precisions?: string,
    public type?: Array<string>,
  ){}
}
