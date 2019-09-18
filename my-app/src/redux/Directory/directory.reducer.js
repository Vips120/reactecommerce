const INITIAL_STATE = {
    sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkurl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkurl: ""
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkurl: ""
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "col-md-6",
          id: 4,
          linkurl: ""
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "col-md-6",
          id: 5,
          linkurl: ""
        }
      ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default directoryReducer;