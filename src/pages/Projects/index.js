import React, { useEffect, useState } from "react";
// import {Button} from '../../components/Button'
import CardRepo from "../../components/CardRepo";
import { Container, Repos } from "./styles";
import api from "../../api";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [repoName, setRepoName] = useState([]);

  async function buscarRepo() {
    await api
      .get("/users/celsojuniodev/repos")
      .then((res) => {
        setRepos(res.data);
        console.log("REPOSITORIOS: ", res.data);
          buscarLanguages(res.data.name)
      })  
         
      .catch((error) => {
        return console.log("TESTEE", error);
      });
  }

  async function buscarLanguages(repoName) {
    await api
      .get(`/repos/CelsoJunioDev/${repoName}/languages`)
      .then((res) => {
        setRepos(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        return console.log("TESTEE", error);
      });
  }

  useEffect(() => {
    buscarRepo();
  }, []);

  return (
    <Container id="projects">
      <h1>Projects</h1>

<Repos>

      { repos.map(rep =>(
          
          <CardRepo      
          key={rep.id}
          title={rep.name}
          subtitle={rep.description? rep.description : "Projeto criado para teste"}
          language="Javascript"
          language2="HTML"
          language3="CSS"
          />

          

          ))          
          
        }
        </Repos>

      {/* 
            <Button
            smooth={true}
            duration={500}
            exact="true"
            to="contact"
            width="200px"
            fontBig={true}
            >
                teste
            </Button> */}
    </Container>
  );
}
