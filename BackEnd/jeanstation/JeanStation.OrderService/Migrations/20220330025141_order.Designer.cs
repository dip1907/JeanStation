﻿// <auto-generated />
using System;
using JeanStation.OrderService.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace JeanStation.OrderService.Migrations
{
    [DbContext(typeof(OrderDBContext))]
    [Migration("20220330025141_order")]
    partial class order
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("JeanStation.OrderService.Models.MultiItemsOrder", b =>
                {
                    b.Property<int>("MultiItemsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("ItemId")
                        .HasColumnType("int");

                    b.Property<double>("ItemPrice")
                        .HasColumnType("float");

                    b.Property<int>("ItemQuantity")
                        .HasColumnType("int");

                    b.Property<int?>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("MultiItemsId");

                    b.HasIndex("OrderId");

                    b.ToTable("MultiItemsOrders");
                });

            modelBuilder.Entity("JeanStation.OrderService.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("AddressId")
                        .HasColumnType("int");

                    b.Property<string>("OrderCreatedAt")
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<string>("OrderStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalPrice")
                        .HasColumnType("int");

                    b.Property<int>("TotalProducts")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("OrderId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("JeanStation.OrderService.Models.ReturnOrder", b =>
                {
                    b.Property<string>("ReturnOrderId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ItemId")
                        .HasColumnType("int");

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<DateTime>("ReturnDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ReturnReason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ReturnOrderId");

                    b.HasIndex("OrderId");

                    b.ToTable("ReturnOrders");
                });

            modelBuilder.Entity("JeanStation.OrderService.Models.MultiItemsOrder", b =>
                {
                    b.HasOne("JeanStation.OrderService.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("JeanStation.OrderService.Models.ReturnOrder", b =>
                {
                    b.HasOne("JeanStation.OrderService.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
                });
#pragma warning restore 612, 618
        }
    }
}