
export interface Foods {
    
    _id : string;
    name : string;
    _type : "food";
    price : number;
    description: string;
    image: any;
}

export interface Chef {
    _id: string;
    name: string;
    _type: "chef";
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    specialty: string;
    description: string;
    slug : {
      _type : "slug",
      current : string,
    }
  }