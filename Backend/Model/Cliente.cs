using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Bomtrajeto.Model
{



    [Table("clientes")]
    public class Cliente
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("nome_cliente")]
        public string Nome { get; set; } = string.Empty;

        [Column("cpf_cliente")]
        public string Cpf { get; set; }

        [Column("nascimento_cliente")]
        public string Nascimento { get; set; } = string.Empty; 

        [Column("email_cliente")]
        public string Email { get; set; } = string.Empty;

        [JsonIgnore]
        public virtual ICollection<Destino>? Destinos { get; set; }


    }
}
