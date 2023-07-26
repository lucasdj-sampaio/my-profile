import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAboutDataType } from 'shared/types/IAboutDataType';
//@ts-ignore
import AboutMeImage from '../../images/meaboutme.jpg';
//@ts-ignore
import CertificationImage from '../../images/certification_aboutme.jpeg';
//@ts-ignore
import CvPt from '../../images/cv_pt.png';
//@ts-ignore
import CvEn from '../../images/cv_en.png';

interface AboutProp {
  aboutData: IAboutDataType[];
  currentId: number;
}

const initialENState: AboutProp = {
  aboutData: [
    {
      Id: 1,
      Image: AboutMeImage,
      Title: '< Me />',
      Text: `I am extremely demanding with myself and strive to accomplish all my tasks with the highest level of 
        excellence possible. My journey in the world of technology began in 2019, through etec, and thanks to this 
        first contact, I was able to develop and evolve to reach where I am today.
        Speaking of technology, I love being a developer facing challenging requirements that make me feel proud 
        and satisfied upon completion. I believe that this pursuit of satisfaction and embracing new challenges has 
        been growing in me since childhood when I had my first encounters with technology, especially through games 
        that taught me to embrace the desire to overcome increasingly difficult levels.
        Going deeper into myself, I enjoy spending time with friends and family, riding a motorcycle around, 
        exercising, and especially going out to eat with good company. So, now you know a little more about me!`,
    },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '321',
      Text: 'czczxczxczxczcxzc',
    },
    { Id: 3, Image: CvEn, Title: 'CV', Text: 'dasddas' },
  ],
  currentId: 1,
};

const initialPTState: AboutProp = {
  aboutData: [
    {
      Id: 1,
      Image: AboutMeImage,
      Title: '<O Lucas />',
      Text: `Sou uma pessoa extremamente exigente comigo mesmo e busco realizar todas as minhas tarefas com o máximo de 
        excelência possível. 
        Minha jornada no mundo da tecnologia começou em 2019, através da etec, e graças a esse primeiro contato, pude me desenvolver e 
        evoluir até alcançar o ponto em que estou atualmente. 
        E falando em tecnologia, amo desenvolvedor requisitos desafiadores que me fazem se sentir orgulho e satisfeito pelo feito. 
        Acredito que Essa busca por satisfação e por enfrentar novos desafios vem crescendo em mim desde a infância, quando tive 
        meus primeiros contatos com a tecnologia, especialmente através dos jogos, que me ensinaram a abraçar o anseio de superar 
        fases cada vez mais difíceis. 
        Falando mais a fundo sobre mim, amo passar meu tempo com amigos e familiares, andar de moto por ai, me exercitar e 
        principalmente sair para comer com boas companhias. Enfim, agora você me conhece um pouquinho mais!`,
    },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '23123',
      Text: 'dsadadsa',
    },
    { Id: 3, Image: CvPt, Title: 'CV', Text: 'dasddas' },
  ],
  currentId: 1,
};

export const aboutSlice = createSlice({
  name: 'aboutData',
  initialState: initialENState,
  reducers: {
    changeAboutLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.aboutData = action.payload.toggleState
        ? initialENState.aboutData
        : initialPTState.aboutData;
    },
    changeCurrentSlideId(state, action: PayloadAction<{ id: number }>) {
      state.currentId = action.payload.id;
    },
  },
});

export const { changeAboutLanguage, changeCurrentSlideId } = aboutSlice.actions;
export default aboutSlice.reducer;
