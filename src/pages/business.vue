<template>
  <q-page class="flex flex-center">

    <q-card style="width: 95%; margin-top: 10px">
        <q-bar class="bg-secondary">
          Website Traffic insights
        </q-bar>
      <q-card-section>
        <iframe style="width: 100%; height: 900px" src="https://app.powerbi.com/reportEmbed?reportId=5cb6de55-899f-4859-8d8b-2a808cc486f0&groupId=0acfa238-62bd-446b-acc4-f63a51e663dd&autoAuth=true&ctid=7e9fa318-6724-43e3-8ccd-d1266faaf34d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWUtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D">
        </iframe>
      </q-card-section>
    </q-card>

    <br>
    <br>

    <q-card style="width: 95%; margin-top: 10px">
      <q-bar class="bg-secondary">
        Product insights
      </q-bar>
      <q-card-section>
        <iframe style="width: 100%; height: 600px" src="https://app.powerbi.com/reportEmbed?reportId=dd2bf2bd-162d-4c6d-a1d0-66b8358a16c4&groupId=0acfa238-62bd-446b-acc4-f63a51e663dd&autoAuth=true&ctid=7e9fa318-6724-43e3-8ccd-d1266faaf34d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWUtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D">
        </iframe>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>

export default {
  name: 'insights'
}
</script>
