-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: lespendulo
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendamento` (
  `ID_Agendamento` int(11) NOT NULL AUTO_INCREMENT,
  `Intervalo_Tempo` time NOT NULL,
  `Nr_Repeticoes` int(10) unsigned NOT NULL,
  `Data_Hora_Agen` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Distancia` int(10) unsigned NOT NULL,
  `Nr_Oscilacoes` int(10) unsigned NOT NULL,
  `Utilizadores_ID_Uti` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID_Agendamento`,`Utilizadores_ID_Uti`),
  KEY `fk_Agendamento_Utilizadores1_idx` (`Utilizadores_ID_Uti`),
  CONSTRAINT `fk_Agendamento_Utilizadores1` FOREIGN KEY (`Utilizadores_ID_Uti`) REFERENCES `utilizadores` (`ID_Uti`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` VALUES (1,'00:00:10',10,'2017-06-22 15:47:02',7,8,1),(2,'00:00:03',1,'2017-03-13 09:30:49',4,6,2),(3,'00:15:00',2,'2017-04-27 18:30:46',8,3,3),(4,'23:00:00',3,'2017-04-28 08:30:46',2,2,4);
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aval_ecra`
--

DROP TABLE IF EXISTS `aval_ecra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aval_ecra` (
  `ID_Aval` int(11) NOT NULL AUTO_INCREMENT,
  `Caminho` varchar(45) NOT NULL,
  `Avaliacao` varchar(45) NOT NULL,
  `Feedback` tinyint(1) NOT NULL,
  `Utilizadores_ID_Uti` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID_Aval`,`Utilizadores_ID_Uti`),
  KEY `fk_Aval_Ecra_Utilizadores1_idx` (`Utilizadores_ID_Uti`),
  CONSTRAINT `fk_Aval_Ecra_Utilizadores1` FOREIGN KEY (`Utilizadores_ID_Uti`) REFERENCES `utilizadores` (`ID_Uti`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aval_ecra`
--

LOCK TABLES `aval_ecra` WRITE;
/*!40000 ALTER TABLE `aval_ecra` DISABLE KEYS */;
INSERT INTO `aval_ecra` VALUES (1,'pag1/ola.adeus','jolie',5,1),(2,'pag2','feio',1,2),(3,'pag5','podia estar melhor',3,3),(4,'homepage','razoavel',4,3),(5,'page3','lindoooooooooooooooo',5,4);
/*!40000 ALTER TABLE `aval_ecra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exp`
--

DROP TABLE IF EXISTS `exp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exp` (
  `ID_Exp` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Distancia` int(10) unsigned NOT NULL,
  `Nr_Oscilacoes` int(10) unsigned NOT NULL,
  `Data_Hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Fase_Lua` varchar(45) NOT NULL,
  `Altura_Mare` int(10) unsigned NOT NULL,
  `Utilizadores_ID_Uti` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID_Exp`,`Utilizadores_ID_Uti`),
  KEY `fk_Exp_Utilizadores1_idx` (`Utilizadores_ID_Uti`),
  CONSTRAINT `fk_Exp_Utilizadores1` FOREIGN KEY (`Utilizadores_ID_Uti`) REFERENCES `utilizadores` (`ID_Uti`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exp`
--

LOCK TABLES `exp` WRITE;
/*!40000 ALTER TABLE `exp` DISABLE KEYS */;
INSERT INTO `exp` VALUES (1,10,3,'2017-03-15 18:26:08','cheia',1,1),(2,3,4,'2017-04-18 19:08:14','nova',2,2),(3,4,2,'2017-01-28 10:28:01','Quarto Cresente',3,3),(4,9,5,'2017-06-22 16:47:01','Quarto Minguante',4,4);
/*!40000 ALTER TABLE `exp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultados`
--

DROP TABLE IF EXISTS `resultados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resultados` (
  `ID_Resutados` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Tempo` double unsigned NOT NULL,
  `Exp_ID_Exp` int(10) unsigned NOT NULL,
  `Exp_Utilizadores_ID_Uti` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID_Resutados`,`Exp_ID_Exp`,`Exp_Utilizadores_ID_Uti`),
  KEY `fk_Resultados_Exp1_idx` (`Exp_ID_Exp`,`Exp_Utilizadores_ID_Uti`),
  CONSTRAINT `fk_Resultados_Exp1` FOREIGN KEY (`Exp_ID_Exp`, `Exp_Utilizadores_ID_Uti`) REFERENCES `exp` (`ID_Exp`, `Utilizadores_ID_Uti`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultados`
--

LOCK TABLES `resultados` WRITE;
/*!40000 ALTER TABLE `resultados` DISABLE KEYS */;
INSERT INTO `resultados` VALUES (1,0.1,1,1),(2,0.25,2,2),(3,0.8,3,3),(4,0.3,4,4);
/*!40000 ALTER TABLE `resultados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizadores`
--

DROP TABLE IF EXISTS `utilizadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilizadores` (
  `ID_Uti` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nome_Apresentacao` varchar(45) NOT NULL,
  `Palavra_Passe` char(40) NOT NULL,
  `Perm` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID_Uti`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizadores`
--

LOCK TABLES `utilizadores` WRITE;
/*!40000 ALTER TABLE `utilizadores` DISABLE KEYS */;
INSERT INTO `utilizadores` VALUES (1,'miguel','202cb962ac59075b964b07152d234b70',0),(2,'joao','202cb962ac59075b964b07152d234b70',1),(3,'andre','202cb962ac59075b964b07152d234b70',2),(4,'alex','202cb962ac59075b964b07152d234b70',3),(5,'Visitante','202cb962ac59075b964b07152d234b70',0);
/*!40000 ALTER TABLE `utilizadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'lespendulo'
--

--
-- Dumping routines for database 'lespendulo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-24 19:46:10
