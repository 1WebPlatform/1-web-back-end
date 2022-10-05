import { Injectable } from '@nestjs/common';
import { Client } from 'pg';
import { InjectClient } from 'nest-postgres';
import { parserBdStructure } from '../../lib/parserBdStructure';

@Injectable()
export class ComponentService {
  constructor(
    @InjectClient() private readonly pg: Client,
  ) {}
}
