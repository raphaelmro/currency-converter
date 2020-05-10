<template>
  <v-app>
    <v-container>
      <v-card width="600" class="mx-auto mt-12">
        <v-card-title><h1>Converter</h1></v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="5">
                <v-select :items="items" label="Standard"></v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="5">
                <v-select :items="items" label="Standard"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-text-field label="From Value" v-model="fromCurrency" />
              </v-col>
              <v-col cols="2">
                <v-card-actions>
                  <v-btn @click="convertCurrencies" class="info" icon>
                    <v-icon>mdi-repeat</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="5">
                <v-text-field label="To Value" v-model="toCurrency" />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      fromCurrency: 1,
      toCurrency: 5.48
    }
  }
}
</script>
