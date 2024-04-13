import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { CheckPassword } from '../../utils/HashPassword'
import { UserSignin } from '../../utils/Types'
const Signin = async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const body = await c.req.json()
    const {success} = UserSignin.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        success: false,
        message: 'please enter your details correctly',
      })
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    })
    if (!user) {
      c.status(403)
      return c.json({
        success: false,
        message: 'please sign Up',
      })
    }
    const validPassword = await CheckPassword(user.password, body.password)
    if (!validPassword) {
      c.status(403)
      return c.json({
        success: false,
        message: 'Invalid password',
      })
    }
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET,
    )
    c.status(200)
    return c.json({
      success: true,
      message: 'user signed In sucessfully',
      data: {
        token: token,
      },
    })
  } catch (error) {
    console.log(error)
    c.status(500)
    return c.json({
      success: false,
      message: 'Failed to signin User',
    })
  }
}

export { Signin }
