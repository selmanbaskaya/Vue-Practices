<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped floating temporary> 
      <v-list dense>
        <v-row class="ma-2 mb-3">
          <img width="30" height="30" class="mr-2" src="./loader.png" />
          <v-toolbar-title class="align-center">
            <span class="title">Mezun Var!</span>
          </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in items" :key="item.icon" link>
          <v-list-action>
            <v-icon class="ml-3 mr-3">
              {{ item.icon }}
            </v-icon>
          </v-list-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" />
        <img width="40" height="40" class="mr-2" src="./loader.png" />
      <v-toolbar-title>
        <h4 color="white">Mezun Var!</h4>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field class="mt-7" solo placeholder="Ara..." single-line append-icon="mdi-magnify" color="white" />
      <v-spacer />
      <v-btn class="ml-0" icon>
        <v-icon>mdi-video</v-icon>
      </v-btn>
      <v-btn class="ml-0" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn class="ma-0" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <div>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="250" offset-x>
          <template v-slot:activator="{on}">
            <v-avatar size="40">
              <img v-on="on" src="./me-crc.png" />
            </v-avatar>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Selman BAŞKAYA</v-list-item-title>
                  <v-list-item-subtitle>Mezun Var!</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>Ayarlar</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="green" />
                </v-list-item-action>
                <v-list-item-title>Karanlık Tema</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="menu=false">
                Çıkış Yap
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="mb-4">
          <v-col sm="6" md="4" lg="3" xl="2" v-for="(item, index) in 18" :key="index">
            <v-card>
              <v-img height="200px" :src="`https://picsum.photos/500/300?image=${(index + 1)}`" :lazy-src="`https://picsum.photos/10/6?image=${(index + 1)}`" />
              <v-card-subtitle class="">İçerik {{ item }}</v-card-subtitle>
              <v-card-text class="text--primary"><div>Başlık Alanı</div><div>Başlık İçeriği</div></v-card-text>
              <v-card-actions>
                <v-btn color="green" text>Kaydet</v-btn>
                <v-btn color="green" text>Paylaş</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
 
export default {
  name: "App",

  data: () => ({
    items : [
      {icon : "mdi-trending-up", text : "Popüler İçerik"},
      {icon : "mdi-youtube-subscription", text : "Takip"},
      {icon : "mdi-history", text : "Geçmiş"},
      {icon : "mdi-playlist-play", text : "Popüler İçerik"},
      {icon : "mdi-clock", text : "Popüler İçerik"},
    ],
    menu : false,
    theme : false,
    drawer : false
  }),

  watch : { 
    theme : function(next) {
      this.$vuetify.theme.dark = next
    }
  }
};
</script>
