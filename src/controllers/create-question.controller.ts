import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
// import { z } from 'zod'

// const questionBodySchema = z.object({})

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestion {
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
