using Microsoft.EntityFrameworkCore;

namespace PaymantAPI.Models;

public class PaymentDetailContext : DbContext
{
    public PaymentDetailContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<PaymentDetail> PaymentDetails { get; set; } = null!;
}
