import { getServerSession, NextAuthOptions } from 'next-auth'
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import GitHub from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_KEY as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}