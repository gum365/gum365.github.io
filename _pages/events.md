---
layout: default
title: Évènements
permalink: /events/
---

Nous sommes ravis de vous présenter notre calendrier d'évènements, où vous trouverez une liste détaillée de toutes nos rencontres, ateliers, webinaires et conférences à venir. Chez nous, l'apprentissage continu et le partage des connaissances sont au cœur de notre communauté. Nos évènements sont conçus pour répondre aux besoins variés de nos membres, que vous soyez débutant ou utilisateur expérimenté de Microsoft 365.

Restez informé des dernières tendances, découvrez les nouvelles fonctionnalités de Microsoft 365, échangez des astuces et des bonnes pratiques avec vos pairs, et élargissez votre réseau professionnel lors de nos évènements conviviaux et enrichissants. Rejoignez-nous pour une expérience d'apprentissage dynamique et engageante !

Consultez régulièrement notre calendrier pour ne rien manquer des évènements à venir, et n'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez proposer un évènement.

Nous avons hâte de vous retrouver lors de nos prochaines rencontres !

- [CollabDays 2024 Montréal](/collabdays2024/).

{% for event in site.events %}
  <a href="{{ event.url | prepend: site.url }}">{{ event.title }}</a>
  <p class="post-excerpt">{{ event.eventdate }}</p>
  <p class="post-excerpt">{{ event.description | truncate: 160 }}</p>
{% endfor %} 
