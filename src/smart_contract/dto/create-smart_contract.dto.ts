import { ApiProperty } from "@nestjs/swagger"

export class CreateSmartContractDto {
    @ApiProperty()
    number: number
}
