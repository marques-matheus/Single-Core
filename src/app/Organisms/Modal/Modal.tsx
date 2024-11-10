
"use client";

import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export function ModalContact({ openModal, setOpenModal }: { openModal?: boolean, setOpenModal: any }) {
    const nameInputRef = useRef<HTMLInputElement>(null);

    return (
        <>

            <Modal dismissible show={openModal} size="xl" popup onClose={() => setOpenModal(false)} initialFocus={nameInputRef} >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-10">
                        <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Entre em contato conosco</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Nome" />
                            </div>
                            <TextInput id="name" ref={nameInputRef} placeholder="Seu nome" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Seu Email" />
                            </div>
                            <TextInput id="email" placeholder="email@email.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="subject" value="Assunto" />
                            </div>
                            <TextInput id="subject" placeholder="Assunto" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="message" value="Messagem" />
                            </div>
                            <Textarea id="message" placeholder="Mensagem" required />
                        </div>

                        <div className="w-full">
                            <Button className="text-sc-600 w-full my-5 border-sc-400 border-2">Enviar</Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalContact