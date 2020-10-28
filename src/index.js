import { logic } from './logic';
import { queries } from './domQueries';

const project = logic.createProject('Default Project');
logic.addToProjectsList(project);
queries.displaySetup();
