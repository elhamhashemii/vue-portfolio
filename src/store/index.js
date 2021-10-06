import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {id: '1', title: 'Making a design system from scratch', date: '12 Feb 2020 | ', category: 'Design, Pattern', des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
      {id: '2', title: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020 | ', category: 'Figma, Icon Design', des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
      {id: '1', title: 'UI Interactions of the week', date: '12 Feb 2020 | ', category: 'Express, Handlebars', des: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
    ],
    works: [
      {id: '1', title: 'Designing Dashboards', badge: '2020', des: 'Dashboard', detail: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', img: '@/assets/Pics/rectangle30'},
      {id: '2', title: 'Vibrant Portraits of 2020', badge: '2019', des: 'Web Design', detail: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', img: '@/assets/Pics/rectangle32'},
      {id: '3', title: '36 Days of Malayalam type', badge: '2018', des: 'Illustration', detail: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', img: '@/assets/Pics/rectangle40'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
