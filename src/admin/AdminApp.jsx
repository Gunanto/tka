import * as React from "react";
import { Admin, Resource, List, Datagrid, TextField, ChipField, EditButton, Create, SimpleForm, TextInput, SelectInput, Edit, NumberInput, ArrayInput, SimpleFormIterator, ReferenceInput, Show, SimpleShowLayout, ShowButton, useRecordContext } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CreateButton, ExportButton, TopToolbar } from 'react-admin';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import QuestionCard from '../components/QuestionCard';

// Use correct API URL
const dataProvider = simpleRestProvider('http://localhost:3001/api');

// --- QUESTIONS RESOURCE ---

const ListActions = () => (
    <TopToolbar>
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export const QuestionList = () => (
    <List actions={<ListActions />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="question" />
            <ChipField source="imagePosition" label="Img Pos" />
            <QuestionViewButton />
            <EditButton />
        </Datagrid>
    </List>
);

const QuestionViewButton = () => {
    const [open, setOpen] = React.useState(false);
    const recordData = useRecordContext();

    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
    };
    const handleClose = (e) => {
        if (e) e.stopPropagation();
        setOpen(false);
    };

    if (!recordData) return null;

    return (
        <>
            <Button size="small" color="primary" onClick={handleOpen} startIcon={<span>👁️</span>}>
                VIEW
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth onClick={(e) => e.stopPropagation()}>
                <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f5f5f5', color: '#1a237e', fontWeight: 'bold' }}>
                    Preview Soal (Tampilan Siswa)
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{ p: 0, bgcolor: '#f9f9f9' }}>
                    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', background: 'white', color: '#333333', minHeight: '400px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
                        <div className="question-area admin-preview" style={{ width: '100%', margin: 0, border: 'none', color: '#333333' }}>
                            <div className="question-header">
                                <span className="question-num">PREVIEW SOAL #{recordData.id}</span>
                            </div>
                            <QuestionCard question={recordData} readOnly={true} showCorrectAnswer={true} />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">TUTUP</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

// We don't need a separate QuestionShow page anymore if we use popup
export const QuestionShow = () => null;

export const QuestionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <SelectInput source="type" choices={[
                { id: 'PG', name: 'Pilihan Ganda' },
                { id: 'PGK', name: 'Pilihan Ganda Kompleks' },
                { id: 'BS', name: 'Benar Salah' },
            ]} />
            <TextInput source="topText" label="Teks Atas (Opsional)" fullWidth multiline />
            <TextInput source="question" label="Pertanyaan" fullWidth multiline />

            <SelectInput source="imagePosition" choices={[
                { id: 'top', name: 'Atas' },
                { id: 'bottom', name: 'Bawah' },
                { id: 'side', name: 'Samping' },
            ]} />

            {/* Simplified Image Input (Text for now, can be improved to FileInput later) */}
            <TextInput source="image" label="Nama File Gambar (ex: soal1.png atau ['img1.png'])" fullWidth />

            {/* Answer & Options Handling - Simplified for now as JSON text or specific inputs */}
            <TextInput source="correctAnswer" label="Kunci Jawaban (Text/JSON)" fullWidth multiline />

            <ArrayInput source="options" label="Pilihan Jawaban (PG/PGK)">
                <SimpleFormIterator>
                    <TextInput source="text" label="Pilihan" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="statements" label="Pernyataan (BS)">
                <SimpleFormIterator>
                    <TextInput source="text" label="Pernyataan" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = () => (
    <Create>
        <SimpleForm>
            <SelectInput source="type" choices={[
                { id: 'PG', name: 'Pilihan Ganda' },
                { id: 'PGK', name: 'Pilihan Ganda Kompleks' },
                { id: 'BS', name: 'Benar Salah' },
            ]} />
            <TextInput source="topText" label="Teks Atas (Opsional)" fullWidth multiline />
            <TextInput source="question" label="Pertanyaan" fullWidth multiline />

            <SelectInput source="imagePosition" choices={[
                { id: 'top', name: 'Atas' },
                { id: 'bottom', name: 'Bawah' },
                { id: 'side', name: 'Samping' },
            ]} defaultValue="top" />

            <TextInput source="image" label="Nama File Gambar" fullWidth />
            <TextInput source="correctAnswer" label="Kunci Jawaban" fullWidth multiline />

            <ArrayInput source="options" label="Pilihan Jawaban (PG/PGK)">
                <SimpleFormIterator>
                    <TextInput source="text" label="Pilihan" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>

            <ArrayInput source="statements" label="Pernyataan (BS)">
                <SimpleFormIterator>
                    <TextInput source="text" label="Pernyataan" fullWidth />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

// --- USERS RESOURCE ---

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="fullName" />
            <ChipField source="role" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="username" />
            <TextInput source="fullName" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'Admin' },
                { id: 'student', name: 'Siswa' },
            ]} />
            <TextInput source="password" label="Password (Isi untuk mengganti)" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <TextInput source="fullName" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'Admin' },
                { id: 'student', name: 'Siswa' },
            ]} defaultValue="student" />
        </SimpleForm>
    </Create>
);


const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} show={QuestionShow} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default AdminApp;
