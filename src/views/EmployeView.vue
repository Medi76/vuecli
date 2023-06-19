<template>
	<section class="wrapper">
		<div class="separator">
			<!-- <div></div> -->
			<strong>Liste des utilisateur</strong>

			<div class="interaction">
				<div class="search-filter">
					<div class="search-items">
						<input
							type="search"
							placeholder="Chercher..."
							v-model="keyword"
							
						/>
						<i class="mdi mdi-magnify"></i>
					</div>
				</div>
				
				<div>
					<button class="btn btn-add" @click="modal_shown=true" >
						<i class="mdi mdi-plus"></i>
						Ajouter employe
					</button>
				</div>
			</div>
		</div>

		<div class="table-container">
			<div class="table-wrap-body">
				<table class="table">
					<thead>
						<tr>
							<th>Nom</th>
							<th>Prénom</th>
							<th>Age</th>
							<th>Genre</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="employe in listeEmployes" :key="employe.id">
							<td>{{employe.nom}}</td>
							<td>{{employe.prenom}}</td>
							<td>{{employe.age}}</td>
							<td>{{employe.genre}}</td>
							<td>En cours</td>
							<td class="act">
								<button @click="modal_addConge=true"
									class="btn-sm btn-primary"
									
								>
									<i class="mdi mdi-pencil"></i>
									Ajout congé
								</button>
								<button
                                    @click="modifierEmploye(employe)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Modifier
                                </button>
								<button @click="suppEmploye(employe)"
									class="btn-sm btn-danger"
									
								>
									<i class="mdi mdi-delete"></i>
									Supprimer
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<AddEmploye v-if="modal_shown"></AddEmploye>
        <AddConge  v-if="modal_addConge"></AddConge>
        <SuppEmploye  v-if="modal_suppemploye" :suppprops="employeObj"></SuppEmploye>
        <ModifieEmploye  v-if="modal_modifieEmploye"  :employeProps="employeObj"></ModifieEmploye>
	</section>
</template>
<script>
import AddEmploye from "../components/AddEmploye.vue"
import AddConge from "../components/AddConge.vue"
import SuppEmploye from "../components/SuppEmploye.vue"
import ModifieEmploye from "../components/ModifieEmploye.vue"
export default {
    data(){
        return{
            modal_shown:false,
            modal_addConge:false,
            modal_suppemploye:false,
            modal_modifieEmploye:false,
			employeObj:{},
            listeEmployes:[
                {id:1,nom:"Artcal'O",prenom:"Lone Wolf", age:45, genre:"F"},
                {id:2,nom:"TLW",prenom:"Wolverine", age:45, genre:"F"},
            ]
        }
    },
    components:{
        AddEmploye,
        AddConge,
        SuppEmploye,
        ModifieEmploye
        
    },
    methods:{
		modifierEmploye(employe){
        this.employeObj=employe
        this.modal_modifieEmploye=true
      },
	 suppEmploye(employe){
        this.employeObj=employe
        this.modal_suppemploye=true
      },
    },
  }

</script>

<style scoped></style>