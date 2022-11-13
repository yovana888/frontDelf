export interface Product {
    id:number,
    name:string,
    slug:string,
}

export interface Link {
  url: null | string,
  label: string,
  active: boolean
}

export interface Response {
     
    status: true,
    data: {
        current_page: 1,
        data: Product[],
        first_page_url: string ,
        from: string | null,
        last_page: number,
        last_page_url: string,
        links: Link[],
        next_page_url:  string | null,
        path: string,
        per_page: number,
        prev_page_url: string | null,
        to: number | null,
        total: number
    }
  }

