export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    address : {
        city: string
    }
}

//сделать интерфейс
export async function search_name(name: string): Promise<IUser[]> {
    const url = `https://dummyjson.com/users/search?q=${name}`;
    const response = await fetch(url);
    const data =await response.json();
    return data.mockUsers;
}