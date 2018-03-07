<template>
  <div class="row">
    <div class="col-sm-4" v-for="project of projectsFilter">
      <div class="project-card">
        <div class="row header">
          <div class="col-sm-4">
            <div>
              <h3 class="percent">{{project.percent}}%</h3>
            </div>
          </div>
          <div class="col-xs-8">
            <div class="">

            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col-sm-12">
            <h3 class="project-name">{{project.name}}</h3>
            <ul class="project-details">
              <li>{{project.evolutions}} Evoluciones</li>
              <li>{{project.todos}} Tareas</li>
              <li>{{project.completed}} Tareas Terminadas</li>
              <li>{{project.pending}} Tareas Pendientes</li>
              <li>{{project.collaborators}} Colaboradores</li>
            </ul>
            <button type="button" class="btn btn-primary btn-block">
              <span class="fa fa-user"></span>
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    components: {},
    data: () => ({
      projects: [],
      filterParam: ""
    }),
    computed: {
      projectsFilter() {
        var parameter = this.filterParam;
        return this.projects.filter(function(project) {
         return project.name.toLowerCase().indexOf(parameter.toLowerCase()) !== -1;
       });
      }
    },
    methods: {
      getProjects(scope) {
        scope.projects = [
          {
            id: 1,
            name: "Mi primer proyecto",
            percent: 50,
            evolutions: 4,
            todos: 100,
            completed: 50,
            pending: 50,
            collaborators: 3
          },
          {
            id: 1,
            name: "Mi segundo proyecto",
            percent: 100,
            evolutions: 2,
            todos: 30,
            completed: 30,
            pending: 0,
            collaborators: 8
          },
          {
            id: 1,
            name: "Mi tercer proyecto",
            percent: 90,
            evolutions: 2,
            todos: 100,
            completed: 90,
            pending: 10,
            collaborators: 1
          },
          {
            id: 1,
            name: "Mi cuarto proyecto",
            percent: 10,
            evolutions: 2,
            todos: 100,
            completed: 10,
            pending: 90,
            collaborators: 1
          }
        ]
        // this.$http({
        //   method: 'POST',
        //   url: '/',
        //   type: 'JSON',
        //   data: {}
        // })
        // .then((res) => {
        //   // Success Response
        // })
        // .catch((err) => {
        //   // Error Response
        // });;
      }
    },
    created() {
      let scope = this;
      this.getProjects(scope);
    }
  }
</script>

<style lang="sass" scoped>
  @import "./ProjecList.sass"
</style>
