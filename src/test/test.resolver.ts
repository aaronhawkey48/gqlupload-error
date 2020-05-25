import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver('Test')
export class TestResolver {
    
    @Query(() => String)
    async test(): Promise<string> {
        return "Hello Test";
    }
    
    
    @Mutation(() => Boolean)
    async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
    {
        createReadStream,
        filename
    }: FileUpload): Promise<boolean> {
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(`./uploads/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }
}
