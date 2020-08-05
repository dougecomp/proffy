import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

interface IClassScheduleData {
    week_day: string;
    from: string;
    to: string;
}

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([{week_day: '', from: '', to: ''}]);

    function addhNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: '', from: '', to: ''}
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" type="text" />
                    <Input name="avatar" label="Avatar" type="text" />
                    <Input name="whatsapp" label="WhatsApp" type="text" />
                    <TextArea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Literatura', label: 'Literatura' },
                            { value: 'Portugês', label: 'Portugês' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'História', label: 'História' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" type="text" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addhNewScheduleItem} >
                            + Novo horário
                        </button>
                    </legend>
                    
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="week_day"
                                label="Dia da semana"
                                options={[
                                    { value: '1', label: 'Segunda-feira' },
                                    { value: '2', label: 'Terça-feira' },
                                    { value: '3', label: 'Quarta-feira' },
                                    { value: '4', label: 'Quinta-feira' },
                                    { value: '5', label: 'Sexta-feira' },
                                    { value: '6', label: 'Sábado' },
                                    { value: '0', label: 'Domingo' },
                                ]}
                            />
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>
                    </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante <br />
                        Preencha seus dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;