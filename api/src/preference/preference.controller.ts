import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PreferenceService } from './preference.service';

@Controller('preferences')
export class PreferenceController {
    constructor(private readonly preferenceService: PreferenceService) {}

    @Get()
    findAll() {
        return this.preferenceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.preferenceService.findOne(+id);
    }

    @Post()
    create(@Body() createPreferenceDto: any) {
        return this.preferenceService.create(createPreferenceDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePreferenceDto: any) {
        return this.preferenceService.update(+id, updatePreferenceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.preferenceService.remove(+id);
    }
}
