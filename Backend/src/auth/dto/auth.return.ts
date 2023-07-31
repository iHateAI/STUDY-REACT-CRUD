import { ApiProperty } from '@nestjs/swagger';
import { UserCreateReturn } from 'src/users/dto/users.return';

export class AuthLoginReturn extends UserCreateReturn {
  @ApiProperty({
    example: '21jliajw3fa-3rl23af-dsafjd',
    description: '유저 세션 아이디',
  })
  sessionId: string;
}

export class AuthLogoutReturn {
  @ApiProperty({
    example: 1,
    description: '삭제된 key 개수',
  })
  deletedCount: number;
}
