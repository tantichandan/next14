
import {AuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

const authOptions : AuthOptions = {

    providers: [

        GithubProvider({
            clientId: 'Iv1.e4b29911a492038c',
            clientSecret : 'd50efb807583579c54616f89b01963d3a78634e1',
        })

    ],

    callbacks : {
        async session({session, token} : any){

            console.log(session, token)
            session.user.name = `${session?.user?.name}_${token?.sub}}`

            return session
 
        }
    },

    secret : 'default_secret_key'

}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST}