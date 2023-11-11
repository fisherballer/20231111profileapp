import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";


const authoptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {username, password} = credentials  as {
          username: string;
          password: string
        }
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        return null
        /*  if (user) {
            return user
          } else {
            return null
        } */
      }
    })
  ],
  debug: true,
  session:{strategy:'jwt'}
}

const handler = NextAuth(authoptions)

export  {handler as GET, handler as POST}
