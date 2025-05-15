"use client";

import styles from "./Profile.module.css";
import { Button, Card, Flex, Skeleton, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <Card hoverable className={styles.card}>
            <Flex justify="space-between">
                <div className={styles.imageContainer}>
                    <Image src="/images/caboclo.png" alt="Nome do Caboclo" fill className={styles.image} />
                </div>

                <Flex vertical align="flex-end" justify="space-around">
                    <div>
                        <Typography.Title level={3}>Mona LisaBeen</Typography.Title>
                        <Typography.Title level={5} type="success">Mockup Front1 Exam</Typography.Title>
                        <Typography.Paragraph>Projeto desenvolvido usando:</Typography.Paragraph>


                    </div>
                    <Link href="/alunos" prefetch>
                    <Button type="primary">Acessar minha API GET via Axios</Button>
                    </Link>
                </Flex>
            </Flex>
        </Card>
    );
}