<template>
  <q-page class="flex flex-center">
    <q-card style="width: 95%; margin-top: 10px">
      <q-bar class="bg-secondary">
        Business overview
      </q-bar>
      <q-card-section>
        <iframe
          style="width: 100%; height: 900px"
          src="https://app.powerbi.com/reportEmbed?reportId=78c4ceb7-3075-4daa-82e8-abfbc39ae4fd&groupId=0acfa238-62bd-446b-acc4-f63a51e663dd&autoAuth=true&ctid=7e9fa318-6724-43e3-8ccd-d1266faaf34d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWUtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&navContentPaneEnabled=False"
        >
        </iframe>
      </q-card-section>
    </q-card>

    <br />
    <br />

    <q-card style="width: 95%; margin-top: 10px">
      <q-bar class="bg-secondary">
        Retention rate and customer acquisition
      </q-bar>
      <q-card-section>
        <iframe
          style="width: 100%; height: 500px"
          src="https://app.powerbi.com/reportEmbed?reportId=77a30bb5-0acd-47d3-8595-b8f1779228e1&groupId=0acfa238-62bd-446b-acc4-f63a51e663dd&autoAuth=true&ctid=7e9fa318-6724-43e3-8ccd-d1266faaf34d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWUtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
        >
        </iframe>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Home'
}
</script>
