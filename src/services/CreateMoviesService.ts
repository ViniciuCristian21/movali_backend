import prismaClient from '../prisma'
import { v4 as uuid } from 'uuid';
interface IMovie {
    title: string,
    description: string,
    classification: string,
    launched_in: string

}
class CreateMoviesSevice {
    async execute(movies: IMovie) {
        const {title, description, classification, launched_in} = movies;
        // ver se ja existe algum filme com mesmo nome
        const userAllReadyExists = await prismaClient.movies.findFirst({
            where: {
                title,
            }
        })
        
        if(userAllReadyExists) {
            return{
                error: "Movie all ready exists"
            }
        }
        // Criar id
        const id = uuid();
        // salvar no banco
        const result = await prismaClient.movies.create({
            data: {
                id,
                title,
                description,
                classification,
                launched_in
            }
        })

        return result;
    }

}


export {CreateMoviesSevice};