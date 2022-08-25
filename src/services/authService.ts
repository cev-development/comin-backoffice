import { dataKids, dataKidsBanheiro, dataKidsGeral } from "../pages/Mock";

interface ILogin {
  email: string;
  password: string;
}

class SessionService {
  async auth({ email, password }: ILogin): Promise<any> {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjA5NDgxNjEsImV4cCI6MTY2MTAzNDU2MSwic3ViIjoie1widXNlcl9pZFwiOjM0OCxcImNodXJjaF9pZFwiOjJ9In0.78Ra0BEYRO8wheOD3x8SxO7zXlfvrlcO7wbOzL8jgAY",
      user: {
        name: "Homologação",
        email: "homo@gmail.com",
      },
    };
  }

  async getKidsForLocal(comin: boolean): Promise<any> {
    if (comin) {
      return dataKids;
    }
    return dataKidsBanheiro;
  }

  async getKids(): Promise<any> {
    return dataKidsGeral;
  }
}

export default new SessionService();
