'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";

export function ModalContact({ openModal, setOpenModal }: { openModal: boolean; setOpenModal: any }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const form = useRef<HTMLFormElement>(null);

    const validateContent = (content: string) => {
        // Bloquear links e caracteres suspeitos
        const forbiddenPatterns = [
            /https?:\/\//gi,     // bloqueia links http ou https
            /javascript:/gi,     // bloqueia "javascript:" 
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // bloqueia tags <script>
            /<[^>]*>/g           // bloqueia tags HTML
        ];
        return !forbiddenPatterns.some((pattern) => pattern.test(content)) && content.length <= 1000;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");

        const formElements = form.current?.elements as any;
        const messageContent = formElements.message.value;
        const emailContent = formElements.user_email.value;

        if (!validateContent(messageContent)) {
            setError("Conteúdo inválido ou potencialmente perigoso.");
            setLoading(false);
            return;
        }

        emailjs.sendForm("service_r6mglzx", "template_dbz5ysd", form.current ?? "", "j43TJuWrDzZfpHdYd")
            .then(
                () => {
                    setSuccess("Email enviado com sucesso!");
                    form.current?.reset(); // Limpa o formulário
                },
                (error: any) => {
                    setError("Erro ao enviar email. Tente novamente.");
                    console.error("FAILED...", error.text);
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <Modal dismissible show={openModal} size="xl" popup onClose={() => setOpenModal(false)}>
            <Modal.Header />
            <Modal.Body>
                <form ref={form} onSubmit={sendEmail} className="space-y-6 px-10">
                    <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Entre em contato conosco</h3>

                    <div>
                        <Label htmlFor="user_name" value="Nome" />
                        <TextInput id="user_name" name="user_name" placeholder="Seu nome" required />
                    </div>

                    <div>
                        <Label htmlFor="user_email" value="Seu Email" />
                        <TextInput
                            id="user_email"
                            name="user_email"
                            type="email"
                            placeholder="email@email.com"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Digite um e-mail válido"
                        />
                    </div>

                    <div>
                        <Label htmlFor="subject" value="Assunto" />
                        <TextInput id="subject" name="subject" placeholder="Assunto" required />
                    </div>

                    <div>
                        <Label htmlFor="message" value="Mensagem" />
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Mensagem"
                            required
                            maxLength={1000}  // Limite de caracteres
                        />
                    </div>

                    <div className="w-full">
                        <Button type="submit" className="text-sc-600 w-full my-5 border-sc-400 border-2" disabled={loading}>
                            {loading ? "Enviando..." : "Enviar"}
                        </Button>
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalContact;
