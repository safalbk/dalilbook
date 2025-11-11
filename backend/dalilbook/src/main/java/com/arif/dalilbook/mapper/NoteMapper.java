package com.arif.dalilbook.mapper;

import com.arif.dalilbook.dto.NoteRequestDto;
import com.arif.dalilbook.dto.NoteResponseDto;
import com.arif.dalilbook.model.Note;

public class NoteMapper {

    public static NoteResponseDto toDto(Note note){
        NoteResponseDto noteDto =new NoteResponseDto();
        noteDto.setId(note.getId());
        noteDto.setTitle(note.getTitle());
        noteDto.setDescription(note.getDescription());
        noteDto.setText(note.getText());
        noteDto.setTags(note.getTags());
        return noteDto;

    }
    public static Note toModel(NoteRequestDto noteRequestDto){

        Note note = new Note();
        note.setTitle(noteRequestDto.getTitle());
        note.setDescription(noteRequestDto.getDescription());
        note.setText(noteRequestDto.getText());
        note.setTags(noteRequestDto.getTags());
        return note;
    }
}
