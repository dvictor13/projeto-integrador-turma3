CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assinaturas`
--

DROP TABLE IF EXISTS `assinaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assinaturas` (
  `idAssinaturas` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  `periodo` varchar(45) NOT NULL,
  `fk_planos` int NOT NULL,
  `cabelo` int DEFAULT NULL,
  `barba` int DEFAULT NULL,
  `fk_pessoas` int NOT NULL,
  `servicosextras` int DEFAULT NULL,
  PRIMARY KEY (`idAssinaturas`),
  KEY `fk_Assinaturas_Planos1_idx` (`fk_planos`),
  KEY `fk_assinaturas_pessoas1_idx` (`fk_pessoas`),
  CONSTRAINT `fk_assinaturas_pessoas1` FOREIGN KEY (`fk_pessoas`) REFERENCES `pessoas` (`idPessoas`),
  CONSTRAINT `fk_Assinaturas_Planos1` FOREIGN KEY (`fk_planos`) REFERENCES `planos` (`idPlanos`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assinaturas`
--

LOCK TABLES `assinaturas` WRITE;
/*!40000 ALTER TABLE `assinaturas` DISABLE KEYS */;
INSERT INTO `assinaturas` VALUES (1,'ativo','mensal',1,5,1,1,2),(3,'inativo','1',1,2,1,4,NULL),(4,'inativo','2',1,4,4,4,NULL),(5,'inativo','3',2,3,2,4,NULL),(6,'inativo','2',1,4,4,4,NULL),(7,'ativo','1',2,3,2,4,2),(8,'inativo','1',1,2,1,5,NULL),(9,'inativo','1',1,2,1,5,NULL),(10,'inativo','1',2,3,2,5,4),(11,'ativo','3',3,5,5,5,5),(12,'inativo','12',1,2,1,6,2),(13,'inativo','6',2,3,2,6,4),(14,'ativo','1',3,4,4,6,6);
/*!40000 ALTER TABLE `assinaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barbearias`
--

DROP TABLE IF EXISTS `barbearias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barbearias` (
  `idBarbearias` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `imagem` varchar(150) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `loja` varchar(50) NOT NULL,
  `bairro` varchar(80) NOT NULL,
  `horarioUtil` varchar(80) NOT NULL,
  `horarioFds` varchar(80) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  PRIMARY KEY (`idBarbearias`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barbearias`
--

LOCK TABLES `barbearias` WRITE;
/*!40000 ALTER TABLE `barbearias` DISABLE KEYS */;
INSERT INTO `barbearias` VALUES (1,'FIO DO BIGODE','images/barbearias/barbearias_4.jpg','Av.Brasil, 2022','1','Centro','Seg. a Sáb.: das 9h às 23h','Dom.: das 11h às 22h','2133256687'),(2,'BARBA NEGRA','images/barbearias/barbearias_5.jpg','Av. Rosa, 2032','1005','Palmeiras','Seg. a Sáb.: das 9h às 23h','Dom.: das 14h às 22h','2133256687'),(3,'VELHO TRANQUILO','images/barbearias/barbearias_6.jpg','Santo Antônio','35','Lua','Seg. a Sáb.: das 9h às 22h','Dom.: das 14h às 17h','2122147756'),(4,'RUA DOS BOBOS','images/barbearias/barbearias_7.jpg','Tijuca','580','Mangueira','Seg. a Sáb.: das 9h às 18h','Dom.: das 08h às 17h','6522147756'),(5,'BOM FIM','images/barbearias/barbearias_8.jpg','General João Telles','20','Bom Fim','Seg. a Sáb.: das 9h às 18h','Não abre','2122147756'),(6,'FININ','images/barbearias/barbearias_9.jpg','Av.Brasil, 2','Térreo','Santana','Seg. a Sáb.: das 9h às 23h','Dom.: das 08h às 17h','2133256687');
/*!40000 ALTER TABLE `barbearias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barbearias_has_planos`
--

DROP TABLE IF EXISTS `barbearias_has_planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `barbearias_has_planos` (
  `fk_barbearias` int NOT NULL,
  `fk_planos` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fk_Barbearias_has_Planos_Planos1_idx` (`fk_planos`),
  KEY `fk_Barbearias_has_Planos_Barbearias1_idx` (`fk_barbearias`),
  CONSTRAINT `fk_Barbearias_has_Planos_Barbearias1` FOREIGN KEY (`fk_barbearias`) REFERENCES `barbearias` (`idBarbearias`),
  CONSTRAINT `fk_Barbearias_has_Planos_Planos1` FOREIGN KEY (`fk_planos`) REFERENCES `planos` (`idPlanos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barbearias_has_planos`
--

LOCK TABLES `barbearias_has_planos` WRITE;
/*!40000 ALTER TABLE `barbearias_has_planos` DISABLE KEYS */;
INSERT INTO `barbearias_has_planos` VALUES (1,1,1),(1,2,2),(2,3,3),(2,1,4),(2,2,5);
/*!40000 ALTER TABLE `barbearias_has_planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoas`
--

DROP TABLE IF EXISTS `pessoas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoas` (
  `idPessoas` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `data_nasc` date NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `status` varchar(45) NOT NULL,
  `imagem` varchar(150) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  PRIMARY KEY (`idPessoas`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoas`
--

LOCK TABLES `pessoas` WRITE;
/*!40000 ALTER TABLE `pessoas` DISABLE KEYS */;
INSERT INTO `pessoas` VALUES (1,'Melissa','1997-03-26','av Brasil','142536728','melissa@email.com','$2b$11$9bWDMYGkFwIreuAZEil89e3VriQnDTIyTmqBySXd9lhyqrl7Q7dgi','ativo','images/profile/userMel.jpg','21998868536','feminino'),(2,'Douglas Victor Menezes','1985-01-13','Acre','00000000022','dv@email.com','$11$9bWDMYGkFwIreuAZEil89e3VriQnDTIyTmqBySXd9lhyqrl7Q7dgi','ativo','images/profile/user.png','(51) 99669-6668','masculino'),(4,'Email','1985-01-13','adasds','00000000000','email@email.com','$2b$11$4XeuuEZx.Bd1Fwb9QBKxVuiJws9NRKP26uWJ.56Saqpm2XJbgObIG','inativo','images/profile/user.png','51996696668','masculino'),(5,'Abigail Costa','1994-07-01','4570 NW 18 Ave','12345678910','abigail@email.com','$2b$11$im6/metp/sCwBf.PC8Bv9Om//pX/7UHKGz92aFA8fzTeqDH72m84a','inativo','images/profile/user.png','56477452401','feminino'),(6,'julio','1994-07-01','Rua leopoldo miguez 144','12345678910','julio@email.com','$2b$11$NprAcln0D3lH.jfLLizdh.of6j/4gPgjQqxSJBn.m/0Bvi9Nod0gC','inativo','images/profile/user.png','12345678910','masculino');
/*!40000 ALTER TABLE `pessoas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planos` (
  `idPlanos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `cabelo` int NOT NULL,
  `barba` int NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `imagem` varchar(150) NOT NULL,
  `economia` decimal(10,0) NOT NULL,
  `servicosextras` int NOT NULL,
  PRIMARY KEY (`idPlanos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
INSERT INTO `planos` VALUES (1,'BASIC',2,1,50,'images/barbeiros/barbeiros_2.jpg',20,2),(2,'STANDARD',3,2,80,'images/barbeiros/barbeiros_3.jpg',30,4),(3,'PREMIUM',4,4,100,'images/barbeiros/barbeiros_4.jpg',40,6);
/*!40000 ALTER TABLE `planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `idServicos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`idServicos`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
INSERT INTO `servicos` VALUES (1,'Corte de cabelo'),(2,'Corte de barba'),(3,'Depilação facial'),(4,'Sobrancelha'),(5,'Tratamento Caspa'),(6,'Spa');
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos_has_barbearias`
--

DROP TABLE IF EXISTS `servicos_has_barbearias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos_has_barbearias` (
  `fk_servicos` int NOT NULL,
  `fk_barbearias` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fk_Servicos_has_Barbearias_Barbearias1_idx` (`fk_barbearias`),
  KEY `fk_Servicos_has_Barbearias_Servicos1_idx` (`fk_servicos`),
  CONSTRAINT `fk_Servicos_has_Barbearias_Barbearias1` FOREIGN KEY (`fk_barbearias`) REFERENCES `barbearias` (`idBarbearias`),
  CONSTRAINT `fk_Servicos_has_Barbearias_Servicos1` FOREIGN KEY (`fk_servicos`) REFERENCES `servicos` (`idServicos`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos_has_barbearias`
--

LOCK TABLES `servicos_has_barbearias` WRITE;
/*!40000 ALTER TABLE `servicos_has_barbearias` DISABLE KEYS */;
INSERT INTO `servicos_has_barbearias` VALUES (1,1,1),(2,1,2),(4,1,3),(1,2,4),(2,2,5),(3,2,6),(4,2,7),(1,3,8),(2,3,9),(3,3,10),(4,3,11),(5,3,12),(1,4,13),(2,4,14),(3,4,15),(4,4,16),(5,4,17),(6,4,18),(1,5,19),(2,5,20),(3,5,21),(6,5,22),(4,6,23),(5,6,24),(6,6,25);
/*!40000 ALTER TABLE `servicos_has_barbearias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vantagens`
--

DROP TABLE IF EXISTS `vantagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vantagens` (
  `idVantagens` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`idVantagens`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vantagens`
--

LOCK TABLES `vantagens` WRITE;
/*!40000 ALTER TABLE `vantagens` DISABLE KEYS */;
INSERT INTO `vantagens` VALUES (1,'Preferência nos agendamentos'),(2,'Atendimento Luxo'),(3,'Cerveja ou Refrigerante'),(4,'Açaí'),(5,'Massagem Capilar'),(6,'Creme de barbear'),(7,'Creme de cabelo'),(8,'Tratamentos capilares'),(9,'Sobrancelha');
/*!40000 ALTER TABLE `vantagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vantagens_has_planos`
--

DROP TABLE IF EXISTS `vantagens_has_planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vantagens_has_planos` (
  `fk_vantagens` int NOT NULL,
  `fk_planos` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fk_Vantagens_has_Planos_Planos1_idx` (`fk_planos`),
  KEY `fk_Vantagens_has_Planos_Vantagens1_idx` (`fk_vantagens`),
  CONSTRAINT `fk_Vantagens_has_Planos_Planos1` FOREIGN KEY (`fk_planos`) REFERENCES `planos` (`idPlanos`),
  CONSTRAINT `fk_Vantagens_has_Planos_Vantagens1` FOREIGN KEY (`fk_vantagens`) REFERENCES `vantagens` (`idVantagens`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vantagens_has_planos`
--

LOCK TABLES `vantagens_has_planos` WRITE;
/*!40000 ALTER TABLE `vantagens_has_planos` DISABLE KEYS */;
INSERT INTO `vantagens_has_planos` VALUES (1,1,1),(2,1,2),(1,2,3),(3,2,4),(2,2,5),(1,3,6),(3,3,7),(4,3,8),(9,3,9);
/*!40000 ALTER TABLE `vantagens_has_planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-30  0:33:30
