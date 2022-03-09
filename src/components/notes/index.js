import React, { Fragment, useEffect, useState } from 'react';
import { Column, Button } from 'rbx';
import '../../styles/notes.scss';
import { slide as Menu } from 'react-burger-menu';
import List from '../notes/list';
import NoteService from '../../services/notes';
import Editor from "../notes/editor";
const Notes = (props) => {
	const [ notes, setNotes ] = useState([]);
	const [ current_note, setCurrentNote ] = useState({ title: '', body: '', id: '' });
    
	async function fetchNotes() {
		const response = await NoteService.index();
		if (response.data.length >= 1) {
			setNotes(response.data.reverse());
			setCurrentNote(response.data[0]);
		}else{
			setNotes([])
		}
	}
    useEffect(() => {
		fetchNotes();
	}, []);
	const selectNote = (id) => {
		const note = notes.find((note) => {
			return note._id == id;
		});
		setCurrentNote(note);
	};
	const deleteNote = async (note) => {
		 await NoteService.delete(note._id);
		 await fetchNotes();
	}
    const createNote = async (params) => {
         const note = await NoteService.create();
         fetchNotes();
    }
	const updateNote = async (oldNote, params) =>{
		// faz a consulta no service passa como parametro a nota antiga e pega a nova
		const updatedNote = await NoteService.update(oldNote._id, params);
		// procura um indice que foi selecionado na nota antiga
		const index = notes.indexOf(oldNote);
		const newNotes = notes;
		// pega o response que veio da consulta e joga na nova nota.
		newNotes[index] = updatedNote.data;
		setNotes(newNotes);
		setCurrentNote(updateNote.note.data);
	}
	
	return (
		<Fragment>
			<Column.Group className="notes" id="notes">
				<Menu
					pageWrapId={'notes-editor'}
					isOpen={props.isOpen}
					onStateChange={(state) => props.setIsOpen(state.isOpen)}
					disableAutoFocus
					outerContainerId={'notes'}
					customBurgerIcon={false}
					customCrossIcon={false}
				>
					<Column.Group>
						<Column size={10} offset={1}>
							Search...
						</Column>
					</Column.Group>
					<List 
					 notes={notes}
                     selectNote={selectNote}
                     createNote={createNote}
					 deleteNote={deleteNote}
                     current_note={current_note} />
				</Menu>
				<Column size={12} className="notes-editor" id="notes-editor"/>
				<Editor
				 note={current_note}
				updateNote={updateNote}
				/>
			</Column.Group>
		</Fragment>
	);
};

export default Notes;
