// import data from 'src/data';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

/*
Probleme : je veux afficher un lien
  dans le menu pour chaque recettes renvoyer par mon api
  et qu'au clic on affiche la page de la recette

- J'ai déjà la logique pour créer le menu en fonction de la liste des recettes
  via le composant Menu qui fait un useSelector pour récupérer la bonne liste
- J'ai déjà la logique pour afficher le détail de la recette via mes Routes
- J'ai pas la bonne liste dans mon state
- J'ai besoin :
  - Au chargement déclencher l'appel
  -> useEffect pour réagir après un rendu, ici au rendu initial de l'application
  - De déclencher un appel à l'api -> axios.get() -> si possible rangé dans un middleware
  - Mémoriser le retour de l'api dans le state -> dispatch d'action pour atterir dans le reducer
*/
