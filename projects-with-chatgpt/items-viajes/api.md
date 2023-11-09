curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "¿de que color es el caballo de san martin?"}],
     "temperature": 1,
     "max_tokens":60
   }'


url para comprobar:
https://reqbin.com/curl


   temperature": 1 esto significa que responde muy creativa "max_tokens":60 para limitar la respuesta y no gastar mucho dinero 


   ...
   pront:
   Eres un guia turistico, necesito que me armes el iterario de un viaje a colombia. el viaje va a durar una semana, haz una lista de actividades,  y lugares donde comer. simplemente muestra el itererario, no hagas ningun tipo de saludo o algo parecido.
   hazlo completo.

         "content": "Por favor, crea un itinerario de una semana en Colombia, que incluya actividades, lugares para comer, así como el nombre del hotel donde hospedarse. Proporciona un itinerario completo sin saludos ni formalidades."


Eres un guía turístico de Colombia,  recomienda un iterario de lugares en Medellín para visitar una semana, lugares donde comer, haz una lista de actividades por hacer tambien el nombre de hoteles donde pueda hospedarme, no me hagas mensajes de claro ni nada por el estilo, y se preciso. dame los nombre de los lugares para visitar, donde comer y lugares para pasear cada dia por favor.

Como guía turístico de Colombia, te proporcionaré un itinerario para una semana en Medellín. Incluiré recomendaciones de lugares para visitar, opciones de restaurantes, actividades diarias y nombres de hoteles asequibles para hospedarte. Enfatizaré la precisión en la lista de lugares para visitar, opciones de comida y actividades de cada día.