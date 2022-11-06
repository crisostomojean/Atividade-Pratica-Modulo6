using Microsoft.EntityFrameworkCore.Infrastructure;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Bomtrajeto.Model
{
    [Table("destinos")]
    public class Destino
    {
        private readonly ILazyLoader _lazyLoader;

        public Destino()
        {

        }

        public Destino(ILazyLoader lazyLoader)
        {
            _lazyLoader = lazyLoader;
        }


        [Column("id")]
        public int Id { get; set; }

        [Column("cidade_destino")]
        [Required]
        public string Cidade { get; set; }

        
        private Cliente _Cliente;
        
        [ForeignKey("cliente_fk")]
        public Cliente Cliente
        {
            get => _lazyLoader.Load(this, ref _Cliente);
            set => _Cliente = value;
        }

    }
}
