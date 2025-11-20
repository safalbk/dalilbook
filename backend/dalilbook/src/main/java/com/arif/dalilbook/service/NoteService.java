package com.arif.dalilbook.service;


import com.arif.dalilbook.dto.NoteRequestDto;
import com.arif.dalilbook.dto.NoteResponseDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.mapper.NoteMapper;
import com.arif.dalilbook.mapper.VideoMapper;
import com.arif.dalilbook.model.Note;
import com.arif.dalilbook.model.Video;
import com.arif.dalilbook.repository.NoteRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class NoteService {
    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository){
        this.noteRepository = noteRepository;

    }
    public List<NoteResponseDto> getNotes(Pageable pageable, String search){


        if (search==null){
            List<Note> notes = noteRepository.findAll(pageable).getContent();
            return notes.stream().map(NoteMapper::toDto).toList();
        }else
        {
            List<Note> notes = noteRepository.searchNotes(search,pageable).getContent();
            return notes.stream().map(NoteMapper::toDto).toList();
        }
    }

    public NoteResponseDto getNoteByID(String id){

        Note existingNote = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found with id: " + id));
        return NoteMapper.toDto(existingNote);
    }

    public NoteResponseDto createNote(NoteRequestDto noteRequestDto){
        Note newNote =noteRepository.save(NoteMapper.toModel(noteRequestDto));

        return NoteMapper.toDto(newNote);

    }
    public NoteResponseDto updateNote(String id, NoteRequestDto noteRequestDto) {
        Note existingNote = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found with id: " + id));

        existingNote.setTitle(noteRequestDto.getTitle());
        existingNote.setDescription(noteRequestDto.getDescription());
        existingNote.setTags(noteRequestDto.getTags());
        existingNote.setText(noteRequestDto.getText());

        Note updatedNote = noteRepository.save(existingNote);
        return NoteMapper.toDto(updatedNote);
    }

    // ✅ Delete note
    public void deleteNote(String id) {
        if (!noteRepository.existsById(id)) {
            throw new RuntimeException("Note not found with id: " + id);
        }
        noteRepository.deleteById(id);
    }

}
