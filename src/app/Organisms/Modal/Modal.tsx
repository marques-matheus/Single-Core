'use client';

import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

export function ModalContact({ openModal: openModal, setOpenModal: setOpenModal }: { openModal: boolean, setOpenModal: any }) {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://formspree.io/f/xvgorbqq", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    setSuccess("Email enviado com sucesso!");
                    e.target.reset();
                } else {
                    throw new Error("Erro ao enviar email.");
                }
            })
            .catch(() => setError("Ocorreu um erro. Tente novamente."));
    };

    return (
        <Modal dismissible show={openModal} size="xl" popup onClose={() => setOpenModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleFormSubmit} className="space-y-6 px-10">
                    <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Entre em contato conosco</h3>

                    <div>
                        <Label htmlFor="user_name" value="Nome" />
                        <TextInput id="user_name" name="user_name" placeholder="Seu nome" required />
                    </div>

                    <div>
                        <Label htmlFor="user_email" value="Seu Email" />
                        <TextInput id="user_email" name="user_email" type="email" placeholder="email@email.com" required />
                    </div>

                    <div>
                        <Label htmlFor="subject" value="Assunto" />
                        <TextInput id="subject" name="subject" placeholder="Assunto" required />
                    </div>

                    <div>
                        <Label htmlFor="message" value="Mensagem" />
                        <Textarea id="message" name="message" placeholder="Mensagem" required maxLength={1000} />
                    </div>

                    <div className="w-full">
                        <Button type="submit" className="text-sc-600 w-full my-5 border-sc-400 border-2">Enviar</Button>
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalContact;
