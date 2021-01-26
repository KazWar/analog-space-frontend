<template>
  <q-page class="flex flex-center">

    <q-card style="width: 95%; margin-top: 10px">
      <q-bar class="bg-secondary">
          Customer insights
        </q-bar>
      <q-card-section>
        <iframe style="width: 100%; height: 1000px" src="https://app.powerbi.com/reportEmbed?reportId=6b08c4a4-c3f9-458d-99e7-c54ed792f3e5&groupId=0acfa238-62bd-446b-acc4-f63a51e663dd&autoAuth=true&ctid=7e9fa318-6724-43e3-8ccd-d1266faaf34d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWUtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D">
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
