<template>
  <v-app>
    <v-container>
      <v-card v-if="currenciesLoaded" width="600" class="mx-auto mt-12">
        <v-card-title><h1>Converter</h1></v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="5">
                <v-autocomplete
                  :items="currencies"
                  item-value="code"
                  item-text="description"
                  v-model="selectFrom"
                  :hint="`${selectFrom.code} - ${selectFrom.description}`"
                  label="Convert from..."
                  no-data-text="No currency available"
                  persistent-hint
                  return-object
                  single-line
                ></v-autocomplete>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="5">
                <v-autocomplete
                  :items="currencies"
                  item-value="code"
                  item-text="description"
                  v-model="selectTo"
                  :hint="`${selectTo.code} - ${selectTo.description}`"
                  label="Convert to..."
                  no-data-text="No currency available"
                  persistent-hint
                  return-object
                  single-line
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-text-field label="From Value" v-model="fromCurrency" />
              </v-col>
              <v-col cols="2">
                <v-card-actions>
                  <v-btn class="info" icon>
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
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      currenciesLoaded: false,
      fromCurrency: 1,
      toCurrency: 5.48,
      selectFrom: { code: 'USD', description: 'United States Dollar' },
      selectTo: { code: 'BRL', description: 'Brazilian Real' }
    }
  },
  created() {
    this.$store.dispatch('getCurrencies')
    this.currenciesLoaded = true
  },
  computed: {
    ...mapState(['currencies'])
  }
}
</script>
